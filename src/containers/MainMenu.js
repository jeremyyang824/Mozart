import React, {PropTypes} from 'react';
import Drawer from 'react-native-drawer';
import {DefaultRenderer, Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MainMenuRender from '../components/MainMenu/MainMenuRender';

class MainMenu extends React.Component {

    static propTypes = {
        navigationState: PropTypes.object,
    };

    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                onOpen={() => Actions.refresh({ key: state.key, open: true })}
                onClose={() => Actions.refresh({ key: state.key, open: false })}
                content={<MainMenuRender />}
                openDrawerOffset={0.2}
                closedDrawerOffset={() => 30}
                panCloseMask={0.2}
                tweenHandler={(ratio) => ({
                    main: { opacity: Math.max(0.54, 1 - ratio) },
                })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

export default MainMenu;
// export default connect(
//     (state, ownProps) => {
//         //map state to props
//         return {};
//     },
//     dispatch => {
//         //map dispatch to props
//         return {
//             //actions: bindActionCreators(actions, dispatch)
//         }
//     }
// )(MainMenu);  