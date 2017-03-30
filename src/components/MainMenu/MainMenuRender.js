import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ListView, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        var menuRows = [];
        menuDataSource.forEach((ds, idx) => {
          if(idx !== 0) {
            menuRows.push(this.renderMenuSplit(idx));
          }
          menuRows.push(<ListView key={`menu-${idx}`} dataSource={ds} renderRow={this.renderMenuRow} />);
        });
        
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
                    {menuRows}
                </View>
            </ScrollView>
        );
    }

    renderMenuRow(menuData) {
      return (
        <TouchableOpacity key={`menu-item-${menuData.title}`} style={styles.menuItem}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width:35}}>
              <Icon name={menuData.icon} size={23} color="#FFF"/>
            </View>
            <Text style={styles.menuItemText}>{menuData.title}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name='chevron-right' size={23} color="#FFF"/>
          </View>
        </TouchableOpacity>
      );
    }

    renderMenuSplit(idx) {
      return (
        <View key={`menu-split-${idx}`} style={styles.menuSplit}>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  mainTitle: {
    flex: 1,
    margin: 15,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
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
  /*菜单*/
  mainMenu: {
  },
  menuSplit: {
    backgroundColor: '#292929',
    height: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    padding: 15,
  },
  
  menuItemText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})

export default MainMenuRender;