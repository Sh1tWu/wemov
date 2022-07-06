import React, { useState, useEffect } from "react"

// 网络请求
import { getReviews } from "@/network/reviews"

// 工具函数
import resolveAvatarPath from "@/utils/resolveAvatarPath"
import resolveDate from "@/utils/resolveDate"

// Hooks
import useWidth from "@/hooks/useWidth"

// style
import {
    Container,
    Title,
    Display,
    Header,
    ReviewsQueue,
    ReviewsQueueItem,
    Wrap,
    UserWrap,
    AvatarWrap,
    Avatar,
    UserInfoWrap,
    Username,
    RatingBar,
    ContentWrap,
    Content,
    Date,
} from "../style/reviews.style"

// Icon
import UserIcon from "@/assets/img/icon/user.svg"

const Reviews = (props) => {
    const { id } = props
    const windowWidth = useWidth()
    const [mainReviewList, setMainReviewList] = useState([])
    const [secondaryReviewList, setSecondaryReviewList] = useState([])
    const [reviewListLength, setReviewListLength] = useState(0)

    useEffect(() => {
        getReviews(id).then((res) => {
            setReviewListLength(res.results.length)
            let results = res.results.splice(0, 8)
            results.forEach((item) => {
                if (item.author_details.avatar_path) {
                    item.author_details.avatar_path = resolveAvatarPath(
                        item.author_details.avatar_path
                    )
                }
                if (item.updated_at) {
                    item.updated_at = resolveDate(item.updated_at)
                }
            })
            setMainReviewList(results)
            setSecondaryReviewList(results.slice(0, 6))
        })
    }, [])

    const reviewsQueue =
        windowWidth >= 1530 || windowWidth <= 1149
            ? mainReviewList !== null || mainReviewList !== undefined
                ? mainReviewList.map((item) => {
                      return (
                          <ReviewsQueueItem key={item.id}>
                              <Wrap>
                                  <UserWrap>
                                      <AvatarWrap>
                                          <Avatar
                                              src={
                                                  item.author_details
                                                      .avatar_path
                                                      ? item.author_details
                                                            .avatar_path
                                                      : UserIcon
                                              }
                                          ></Avatar>
                                      </AvatarWrap>
                                      <UserInfoWrap>
                                          <Username>{item.author}</Username>
                                          <RatingBar>
                                              {item.author_details.rating
                                                  ? item.author_details.rating
                                                  : "暂无评分"}
                                          </RatingBar>
                                      </UserInfoWrap>
                                  </UserWrap>
                                  <ContentWrap>
                                      <Content>{item.content}</Content>
                                  </ContentWrap>
                              </Wrap>
                              <Date>{item.updated_at}</Date>
                          </ReviewsQueueItem>
                      )
                  })
                : null
            : secondaryReviewList !== null || secondaryReviewList !== undefined
            ? secondaryReviewList.map((item) => {
                  return (
                      <ReviewsQueueItem key={item.id}>
                          <Wrap>
                              <UserWrap>
                                  <AvatarWrap>
                                      <Avatar
                                          src={
                                              item.author_details.avatar_path
                                                  ? item.author_details
                                                        .avatar_path
                                                  : UserIcon
                                          }
                                      ></Avatar>
                                  </AvatarWrap>
                                  <UserInfoWrap>
                                      <Username>{item.author}</Username>
                                      <RatingBar>
                                          {item.author_details.rating
                                              ? item.author_details.rating
                                              : "暂无评分"}
                                      </RatingBar>
                                  </UserInfoWrap>
                              </UserWrap>
                              <ContentWrap>
                                  <Content>{item.content}</Content>
                              </ContentWrap>
                          </Wrap>
                          <Date>{item.updated_at}</Date>
                      </ReviewsQueueItem>
                  )
              })
            : null

    return (
        <>
            <Container>
                <Header>
                    <Title>评价</Title>
                    <Display>查看全部({reviewListLength})</Display>
                </Header>
                <ReviewsQueue>{reviewsQueue}</ReviewsQueue>
            </Container>
        </>
    )
}

export default Reviews
