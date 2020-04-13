在 Twitter 函数中定义好数据结构
followMap：用户关注列表， 用 Set 数据类型不需要去处理重复数据，取消关注（从列表删除）也会更方便；
postMap：用户推文列表；
latestPostId：推文的自增id，用于后续获取推文列表时排序；

在 postTweet 函数中，将新增的 推文 { tweetId, postTime } 放到列表的最前面，并确保 latestPostId 自增；

在 follow 函数中，先检查 followMap 是否已存在 followerId 数据，若已存在，直接 add(followeeId), 若不存在，新增 new Set([followeeId])；
在 unfollow 函数中，直接检查是否存在 followMap[followerId] 列表，若存在直接delete(followeeId)；
在 getNewsFeed 函数中，因为要取用户和用户关注的用户的最新 10 条推文，所以只需要把这些用户的前10条推文取出来，再根据postTime去排序，然后取最新10条推文。