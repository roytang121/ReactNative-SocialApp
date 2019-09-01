import React, { PureComponent } from 'react';
import { IAlbum, IPhoto } from '../modules/Album.types';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { head } from 'lodash';

export interface IProps {
  item: IAlbum;
  width: number;
  height: number;
}

export class Album extends PureComponent<IProps> {
  get firstPhoto(): IPhoto {
    return head(this.props.item.photos);
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={() => {}}>
        <Image
          style={{ width: this.props.width, height: this.props.height }}
          source={{ uri: this.firstPhoto.thumbnailUrl }}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});
