import blog from "../data/blog.json"

export default {
  state: {
    blog: blog,
    keyword: undefined,
    second2Posts: [],
    topPost: {},
    latestPosts: [],
    categories: [],
    filterByCategory: [],
    tags: [],
    deletePost: []
  },
  mutations: {
    searchByKeyword(state,keyword){
      state.keyword = keyword
    },
    filterPostsByCat(state,id){
      state.filterByCategory = state.blog.filter(x => x.categoryID == id)
    },
    addBlog(state,blogObj){
      state.blog.push(blogObj);
      
    },
    deletePost(state,id){
      state.deletePost.push(id)
      
    }
  },
  actions: {
    search(context,keyword){
      context.commit("searchByKeyword",keyword)
    },
    filterPosts(context,id){
      context.commit('filterPostsByCat',id)
    }
  },
  getters: {
    Allblogs(state){
      if(state.keyword){
        return state.blog.filter(x => {
          return x.title.toLowerCase().startsWith(state.keyword.toLowerCase()) || 
                 x.author.toLowerCase().startsWith(state.keyword.toLowerCase()) || 
                 x.category.toLowerCase().startsWith(state.keyword.toLowerCase())
        })
      }
      return state.blog
    },
    topPost(state){
      state.topPost = [...state.blog];
      state.topPost.sort((a, b) => b.views - a.views);
      return state.topPost.slice(0, 1)[0];
    },
    postsWithMostViews(state){
      state.second2Posts = [...state.blog];
      state.second2Posts.sort((a, b) => b.views - a.views);
      return state.second2Posts.slice(1, 3);
    },
    lastPost(state){
      let tmp = [];
      if(state.filterByCategory.length){
        return state.filterByCategory
      }
      tmp = state.blog.sort((a,b) => {
        return new Date(b.date) - new Date(a.date)
      })
      return tmp.slice(0,6);

    },
    categories(state){
      //let tmp = [];
      for(let b of state.blog){
        let obj = {
          id: b.categoryID,
          category: b.category,
          total: 1
        }
        let categoryExists = state.categories.find(c => c.id == b.categoryID);
        if (categoryExists) {
          categoryExists.total++;
        } else {
          state.categories.push(obj);
        }
      }
      return state.categories
    },
    tags(state){
      for(let b of state.blog){
        for(let tag of b.tags){
          let tagExists = state.tags.find(t => t.tag == tag);
          if(!tagExists){
            state.tags.push({ tag: tag })
          }
        }
      }
      return state.tags
    },
    changeBlogs(state,getters){
      return getters.Allblogs.filter(x => !state.deletePost.includes(x.id))
    }
  }
}