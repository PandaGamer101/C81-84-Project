import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    LogBox
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import {RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render(){
        if (!this.props.route.params) {
            this.props.navigation.navigate("Home");
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Spectagram</Text>
                        </View>
                    </View>
               
                <View style={styles.postContaier}>
                    <ScrollView style={styles.postCard}>
                        <View style={styles.authorContainer}>
                            <View style={styles.authorImageContainer}>
                                <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                                ></Image>
                            </View>
                            <View style={styles.authorNameContainer}>
                                <Text style={styles.authorNameText}>{this.props.route.params.author}</Text>
                            </View>
                            </View>
                            <Image source={require("../assets/image_1.jpg")} style={styles.postImage} />
                            <View style={styles.captionContainer}>
                                <View style={styles.captionText}>
                                    <Text style={styles.captionText}>
                                        {this.props.route.params.caption}
                                    </Text>
                                </View>
                                <View style={styles.actionContainer}>
                                    <View style={styles.likeButton}>
                                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                        <Text style={styles.likeText}>12k</Text>
                                </View>
                        </View>
                    </ScrollView>
                </View>
             </View>
            );
        }
    }
}

const styles = StyleSheet.create({
container : {
    flex: 1,
    background: "black"
}
});