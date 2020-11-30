import React, { useEffect, setState }from "react";
import axios from "axios";

export const getNews = () => {
    const news = axios
        .get("http://localhost:8000/api/news", {
            withCredentials: true
        })
    return news;
}
