import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'

import Manuscript from '@/components/Manuscript'

import hotspotIndex from '@/hotspot/hotspotIndex'

import details from '@/components/details'

import selectedTopic from '@/components/selectedTopic'

import establish from '@/Chart/Establish'

import Inspiration from '@/Chart/Inspiration'

import detailsHot from '@/hotspot/detailsHot'

import hotNews from '@/hotspot/hotNews'

import newClue from '@/hotspot/newClue'  //最新线索

import clueDetails from '@/hotspot/clueDetails'   //线索详情

import myMessage from '@/components/myMessage'

import myNews from '@/my-message/myNews'  //我的消息

import myJournalism from '@/my-message/myJournalism'  //我的新闻

import myTopic from '@/my-message/myTopic'  //我的话题

import myCharacter from '@/my-message/myCharacter'  //我的人物

import myReport from '@/my-message/myReport'  //重大报道

import updatePwd from '@/my-message/updatePwd'  //修改密码

import myInspiration from '@/my-message/myInspiration'  //创意灵感

import inspirationDetails from '@/my-message/inspirationDetails'  //创意灵感详情

import mynewsDetails from '@/my-message/mynewsDetails'  //我的新闻详情页

import myInformation from '@/my-message/myInformation'  //个人信息

import newsDetail from '@/hotspot/newsDetail'   //新闻详情页

import topicDetails from '@/my-message/topicDetails'  //话题详情

import chartDetails from '@/my-message/chartDetails'  //我的人物详情

import reportDetails from '@/my-message/reportDetails'  //重大报道详情

import myProblem from '@/my-message/myProblem'  //我的选题

import selectedDetails from '@/Chart/selectedDetails'  //选题分析详情

import draft from '@/topic/draft'  //选题草稿

import beAudited from '@/topic/beAudited'  //选题待审核

import audited from '@/topic/audited'   //选题已审核

import notThrough from '@/topic/notThrough'   //选题未通过

import del from '@/topic/del'   //选题已删除

import draftDetails from '@/topic/draftDetails'  //选题草稿详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
       path:'/Manuscript',
       component:Manuscript
    },
    {
      path:'/details',
      component:details
    },
    {
      path:'/establish',
      component:establish
    },
    {
      path:'/Inspiration',
      component:Inspiration
    },
    {
      path:'/detailsHot',
      name:'detailsHot',
      component:detailsHot
    },
    //我的 页面列表
    {
      path:'/myMessage',
      component:myMessage
    },
    {
      path:'/myNews',
      component:myNews
    },
    {
      path:'/myJournalism',
      component:myJournalism
    },
    {
      path:'/myTopic',
      component:myTopic
    },
    {
      path:'/myCharacter',
      component:myCharacter
    },
    {
      path:'/myReport',
      component:myReport
    },
    {
      path:'/updatePwd',
      component:updatePwd
    },
    {
    	path:'/hotspotIndex',
    	component:hotspotIndex
    },
    {
    	path:'/hotNews',
    	component:hotNews
    },
    {
    	path:'/newsDetail',
    	component:newsDetail
    },
    {
      path:'/selectedTopic',
      name:'selectedTopic',
      component:selectedTopic
    },
    {
      path:'/selectedTopic',
      component:selectedTopic
    },
    //最新线索
    {
      path:'/newClue',
      component:newClue
    },
    //线索详情
    {
      path:'/clueDetails',
      component:clueDetails
    },
    //创意灵感
    {
      path:'/myInspiration',
      component:myInspiration
    },
    //创意灵感详情
    {
      path:'/inspirationDetails',
      component:inspirationDetails
    },
    //我的新闻详情页
    {
      path:'/mynewsDetails',
      component:mynewsDetails
    },
    //个人信息
    {
      path:'/myInformation',
      component:myInformation
    },
    //话题详情
    {
      path:'/topicDetails',
      component:topicDetails
    },
    //我的人物详情
    {
      path:'/chartDetails',
      component:chartDetails
    },
    //重大报道详情
    {
      path:'/reportDetails',
      component:reportDetails
    },
    //我的选题
    {
      path:'/myProblem',
      component:myProblem
    },
    //选题
    {
      path:'/selectedTopic',
      component:selectedTopic
    },
    //选题分析详情
    {
      path:'/selectedDetails',
      component:selectedDetails
    },
    //选题草稿
    {
      path:'/draft',
      component:draft
    },
    //选题草稿详情
    {
      path:'/draftDetails',
      component:draftDetails
    },
    //选题待审核
    {
      path:'/beAudited',
      component:beAudited
    },
    //选题已审核
    {
      path:'/audited',
      component:audited
    },
    //未通过
    {
      path:'/notThrough',
      component:notThrough
    },
    //已删除
    {
      path:'/del',
      component:del
    }
  ]
})