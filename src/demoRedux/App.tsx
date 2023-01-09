// import * as React from "react"
// import { useSelector, shallowEqual, useDispatch } from "react-redux"

// import { AddArticle } from "./AddArticle"
// import { addArticle, removeArticle } from "../store/reducerModule/async-actions"
// import { Dispatch } from "redux"
// import { ArticleState, IArticle } from "../store/reducerModule/types"
// import { Article } from "./Article"
// import { RootState } from "../store"

// const App: React.FC = () => {
//   const articles: readonly IArticle[] = useSelector(
//     (state:  RootState) => state.firstReducer.articles,
//     shallowEqual
//   )

//   const dispatch: Dispatch<any> = useDispatch()

//   const saveArticle = React.useCallback(
//     (article: IArticle) => dispatch(addArticle(article)),
//     [dispatch]
//   )

//   return (
//     <main>
//       <h1>My Articles</h1>
//       <AddArticle saveArticle={saveArticle} />
//       {articles.map((article: IArticle) => (
//         <Article
//           key={article.id}
//           article={article}
//           removeArticle={removeArticle}
//         />
//       ))}
//     </main>
//   )
// }

// export default App

import React from "react";

export const app = () => {
  return <div></div>;
};
