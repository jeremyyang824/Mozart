import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ListView} from 'react-native';
import Button from 'react-native-button';

import MainMenuData from './MainMenuData';

class MainMenuRender extends React.Component {
    
    constructor(props) {
      super(props);

      var menuDataSource = MainMenuData.map(subMenu => {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        ds = ds.cloneWithRows(subMenu);
        return ds;
      });

      this.state = {
        menuDataSource: menuDataSource
      };
    }

    render() {
        const menuDataSource = this.state.menuDataSource;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.mainTitle}>
                  <View style={styles.mainTitleLogo}>
                    <Image style={styles.mainTitleLogoIcon} source={require('../../images/logo.png')} />
                  </View>
                  <View style={styles.mainTitleText}>
                    <Text style={styles.mainTitleTextH1}>上海烟草机械有限责任公司</Text>
                    <Text style={styles.mainTitleTextH2}>SHANGHAI TOBACCO MACHINERY CO., LTD</Text>
                  </View>
                </View>
                <View style={styles.mainMenu}>
                    {
                      menuDataSource.map((ds, idx) => {
                        return (
                          /*<SplitElem/>*/
                          <ListView key={idx}
                            dataSource={ds}
                            renderRow={this.renderMenuRow} />
                        );
                      })
                    }
                </View>
            </ScrollView>
        );
    }

    renderMenuRow(menuData) {
      return (
        <View key={menuData.title}>
          <Text>{menuData.title}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  mainTitle: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'red',
  },
  mainTitleLogo: {
    justifyContent: 'space-between',
    marginRight: 8,
  },
  mainTitleLogoIcon: {
    width:50,
    height:50,
  },
  mainTitleText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainTitleTextH1: {
    color: '#CCC357',
    fontSize: 20,
  },
  mainTitleTextH2: {
    color: '#CCC357',
    fontSize: 12,
  },
  mainMenu: {
    borderWidth: 1,
    borderColor: 'red',
  }
})

export default MainMenuRender;