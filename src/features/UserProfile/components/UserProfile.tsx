import React, { PureComponent, ReactElement } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Dimensions, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { IUser, IPost } from '../../PostsFeed/modules/PostsFeed.types';
import { Colors } from '../../../utils/colors';
import { Label } from '../../../components/Label/Label';
import { Gap } from '../../../components/Flex/Gap';
import { PostConatiner } from '../../PostsFeed/containers/Post.container';
import { Flex } from '../../../utils/flex';
import { Separator } from '../../../components/Separator/Separator';
import { isEmpty, isNil, get, head } from 'lodash';
import { IAlbum, IPhoto } from '../../Album/modules/Album.types';
import { Album } from '../../Album/components/Album';

export interface IProps {
  user: IUser;
  userId?: number;
  posts: IPost[];
  albums: IAlbum[];
}

export interface IEvents {
  fetchAlbums: () => void;
}

export interface IState {
  selectedTab: Tab;
  contentOffsetY: number;
}

export enum Tab {
  POST = 'POST',
  ALBUM = 'ALBUM'
}

export class UserProfile extends PureComponent<IProps & IEvents, IState> {
  state: Readonly<IState> = {
    selectedTab: Tab.POST,
    contentOffsetY: 0,
  };

  get user(): IUser {
    return this.props.user;
  }

  get postData(): IPost[] {
    return this.props.posts;
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  transpose = (a: any[]) => {
    if (isEmpty(a)) return [];
    
    return Object.keys(a[0]).map(c => {
      return a.map(r => r[c]).filter(r => !isNil(r));
    });
  }

  get albumData(): IAlbum[][] {
    const items: IAlbum[][] = [];
    
    this.props.albums.forEach((item: IAlbum, index: number) => {
      if (isEmpty(items[index % 3])) {
        items[index % 3] = [];
      }
      items[index % 3].push(item);
    });
    return this.transpose(items);
  }

  get featurePhoto(): IPhoto {
    return head(get(head(this.props.albums), ['photos'], null));
  }

  get featurePhotoScale(): number {
    return 1 + Math.min(Math.max(0, -this.state.contentOffsetY * 0.01), 1.5);
  }

  get dataForTab(): any[] {
    const tabComponents: ReactElement[] = [this.renderTabBar(), <Separator full={true} />];
    switch (this.state.selectedTab) {
      case Tab.POST:
        return [...tabComponents, ...this.postData];
      case Tab.ALBUM:
        return [...tabComponents, ...this.albumData];        
    }
  }

  renderTabBar(): ReactElement {
    const selectedTab: Tab = this.state.selectedTab;
    return (
      <View style={{ ...Flex.row, alignItems: 'stretch', backgroundColor: 'white' }}>
        <TouchableOpacity
          style={{ ...styles.tabItem, ...(selectedTab === Tab.POST ? styles.tabItemActive : {}) }}
          onPress={() => this.setState({ selectedTab: Tab.POST })}>
          <Text style={{ ...(selectedTab === Tab.POST ? styles.tabItemTitleActive : {}) }}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.tabItem, ...(selectedTab === Tab.ALBUM ? styles.tabItemActive : {}) }}
          onPress={() => this.setState({ selectedTab: Tab.ALBUM })}>
          <Text style={{ ...(selectedTab === Tab.ALBUM ? styles.tabItemTitleActive : {}) }}>Album</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{this.user.name}</Text>
        <Gap height={4} />
        <Text style={styles.username}>@{this.user.username}</Text>
        <Gap height={4} />
        <Text style={styles.description}>{this.user.company.catchPhrase}</Text>
        <Gap height={4} />
        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
          <Label icon="ios-pin" labelText={this.user.address.city} />
          <Label icon="ios-car" labelText={this.user.company.name} />
          <Label icon="ios-home" labelText={this.user.address.suite} />
          <Label icon="ios-link" labelText={this.user.website} />
          <Label icon="ios-mail" labelText={this.user.email} />
        </View>
      </View>
    );
  }

  renderRow = (args: any) => {
    return this.state.selectedTab === Tab.POST ? this.renderRowForPost(args) : this.renderRowForAlbum(args);
  }

  renderRowForPost = ({ item }: {item: IPost | ReactElement}) => {
    if (React.isValidElement(item)) {
      return item;
    }
    return (
      <View style={{ backgroundColor: 'white' }}>
        <PostConatiner item={item} />
      </View>
    );
  }

  renderRowForAlbum = ({ item }: {item: IAlbum[] | JSX.Element}) => {
    if (React.isValidElement(item)) {
      return item;
    }
    const width: number = Dimensions.get('window').width / 3.0;
    return (
      <View style={{ ...Flex.row }}>
        {
          item.map((album: IAlbum, index: number) => 
            <View style={{ height: width, width: width }} key={`${album.id}-${index}`}>
              <Album item={album} width={width} height={width} />
            </View>
          )
        }
      </View>
    );
  }

  keyForRow = (_: any, index: number) => `post-item-${index}`;

  renderFeaturePhoto = () => {
    const _featurePhoto: IPhoto = this.featurePhoto;
    const width: number = Dimensions.get('window').width;
    if (_featurePhoto) {
      return (
        <View style={styles.featurePhotoContainer}>
          <Image
            style={{ width: '100%', height: '100%', transform: [{ scale: this.featurePhotoScale }] }}
            source={{ uri: _featurePhoto.url }} />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ position: 'relative' }}>
        {this.renderFeaturePhoto()}
        <FlatList
          style={styles.scrollView}
          ListHeaderComponent={this.renderHeader()}
          data={this.dataForTab}
          keyExtractor={this.keyForRow}
          renderItem={this.renderRow}
          stickyHeaderIndices={[1]}
          onScroll={this.onScroll}
          />
      </View>
    );
  }

  onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY: number = event.nativeEvent.contentOffset.y;
    this.setState({ contentOffsetY: offsetY });
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginTop: 120,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
    color: Colors.textTitle
  },
  username: {
    fontSize: 14,
    color: Colors.textMeta,
  },
  description: {
    fontSize: 14,
    color: Colors.textBody,
  },
  tabItem: {
    flex: 1,
    height: 40,
    color: Colors.textBody,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemActive: {
    borderBottomColor: Colors.highlight,
    borderBottomWidth: 2,
  },
  tabItemTitleActive: {
    color: Colors.highlight,
    fontWeight: 'bold',
  },
  featurePhotoContainer: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
  }
});
