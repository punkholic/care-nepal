import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	Pressable,
	Linking,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios';

const styles = StyleSheet.create({
	loading: {
		marginTop: 10,
		paddingHorizontal: 30,
		paddingVertical: 20,
		fontSize: 18,
	},
	header: {
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	headerText: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 20,
	},
	headerDatetime: {
		flex: 1,
		lineHeight: 22,
		textAlign: 'right',
	},
	newsList: {
		flex: 1,
		backgroundColor: '#eaeaea',
	},
	newsItem: {
		marginVertical: 10,
		marginHorizontal: 15,
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: 'white',
		borderRadius: 3,
	},
	image: {
		height: 200,
	},
	title: {
		marginVertical: 15,
		fontWeight: 'bold',
		fontSize: 20,
	},
	content: {
		lineHeight: 22,
		fontSize: 15,
	},
});

const NewsList = ({ category , navigation}) => {
	const [datetime] = useState(new Date());
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = category === 'all' ? '' : `&category=${category}`;
				const response = await axios.get(
					`https://corona.askbhunte.com/api/v1/news`,
                );
				AsyncStorage.setItem("news", JSON.stringify(response.data.data))
				setArticles(response.data.data);
			} catch (e) {
				AsyncStorage.getItem("news").then(data => {
					if(data){
					   let ourData = JSON.parse(data)
					   setArticles(ourData)
					}
				  }).catch(err => console.log("error >>>>> ",err))
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]);
	return (
		<ScrollView style={styles.newsList}>
			
			{loading ? (
				<Text style={styles.loading}>⏳ Loading...</Text>
			) : (
				articles &&
				articles.map((article) => (
					<Pressable
						key={article.title}
						style={styles.newsItem}
						onPress={() => {
							navigation.navigate('WebNews', {link: article.url});
						}}
					>
						<Image
							source={{uri :article.image_url}}
							style={styles.image}
						/>
						<Text style={styles.title}>{article.title}</Text>
						<Text style={styles.content}>
							{article.summary}
						</Text>
					</Pressable>
				))
			)}
		</ScrollView>
	);
};

export default NewsList;
