import './App.css';
import NavInshorts from './components/NavInshorts';
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apikey from './data/Config';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setcategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadmore, setLoadmore] = useState(20)

  
  const newsApi = async () => {
    try {
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newsArray)

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <NavInshorts setcategory={setcategory} />

      <NewsContent
        setLoadmore={setLoadmore}
        loadmore={loadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />

      <Footer />
    </div>
  );
}

export default App;
