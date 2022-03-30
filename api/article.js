import { request } from '@/plugins/request';

//用户登录
export const getArticles = params => {
  return request({
    method: "GET",
    url: "/articles",
    params
  });
};

//api/articles/feed
export const getFeedArticles = params => {
  return request({
    method: "GET",
    url: "/articles/feed",
    params
  });
};

//添加点赞
export const addFavorite = slug => {
  return request({
    method: "POST",
    url: `/articles/${slug}/favorite`,
  });
};

//取消点赞
export const deleteFavorite = slug => {
  return request({
    method: "DELETE",
    url: `/articles/${slug}/favorite`,
  });
};

//获取文章详情
export const getArticle = slug => {
  return request({
    method: "GET",
    url: `/articles/${slug}`,
  });
};

//获取文章评论
export const getComments = slug => {
  return request({
    method: "GET",
    url: `/articles/${slug}/comments`,
  });
};