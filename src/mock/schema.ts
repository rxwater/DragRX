import { userByTokenResolver, loginResolver } from "./login/resolvers";
import { postGQLType, postGQLQuery, postGQLMutation } from "./cms/postGraphql";
import { postChannelMutationResolvers, postChannelQueryResolvers } from "./cms/channel/resolvers";
import { postTagMutationResolvers, postTagQueryResolvers } from "./cms/postTag/resolvers";
import { mediasGQLMutation, mediasGQLQuery, mediasGQLType } from "./medias/graphql";
import { mediaQueryResolvers } from "./medias/queryResolvers";
import { mediaMutationResolvers } from "./medias/mutationResolvers";
import { postMutationResolvers, postQueryResolvers } from "./cms/post/resolvers";
import { splitDemoMutationResolvers } from "./demo/splitSubmit/resolvers";
import { splitGQLInput, splitGQLMutation, splitGQLType } from "./demo/splitSubmit/graphql";
import { supplierQueryResolvers } from "./supplier/resolvers";
import { supplierGQLInput, supplierGQLQuery, supplierGQLType } from "./supplier/graphql";
import { userGQLType, userGQLInput, userGQLQuery, userGQLMutation } from "./user/userGraphql";
import { userQueryResolvers, userMutationResolvers } from "./user/userResolvers";
import { appGQLInput, appGQLMutation, appGQLQuery, appGQLType } from "./apps/graphql";
import { appMutationResolvers, appQueryResolvers } from "./apps/appResolvers";
import { pageMutationResolvers, pageQueryResolvers } from "./apps/pageResolvers";
import { templateQueryResolvers } from "./templates/resolvers";
import { templateGQLQuery, templateGQLType } from "./templates/graphql";
import { authMutationResolvers, authQueryResolvers } from "./apps/authResolvers";
import { roleGQLType, roleGQLInput, roleGQLQuery, roleGQLMutation } from "./user/roleGraphql";
import { authGQLInput, authGQLMutation, authGQLQuery, authGQLType } from "./apps/authGraphql";
import { roleMutationResolvers, roleQueryResolvers } from "./user/roleResolvers";
import { enquiryGQLInput, enquiryGQLMutation, enquiryGQLQuery, enquiryGQLType } from "./cms/enquires/enquiryGraphql";
import { enquiryMutationResolvers, enquiryQueryResolvers } from "./cms/enquires/enquiryResolvers";
import { postChannelGQLMutation, postChannelGQLQuery } from "./cms/channelGraphql";
import { postTagGQLMutation, postTagGQLQuery, postTagGQLType } from "./cms/postTagGraphql";
import { postAttributeMutationResolvers, postAttributesQueryResolvers } from "./cms/postAttribute/resolvers";
import { postAttributeGQLMutation, postAttributeGQLQuery, postAttributeGQLType } from "./cms/postAttributeGraphql";
import { productGQLMutation, productGQLQuery, productGQLType } from "./cms/productGraphql";
import { productMutationResolvers, productQueryResolvers } from "./cms/product/resolvers";
const GraphQLJSON = require('graphql-type-json');
// The GraphQL schema
export const schema = `
  scalar JSON

  type LoginData{
    user:RxUser! 
    token:String!
  }

  type PaginatorInfo{
    count:Int
    currentPage:Int
    hasMorePages:Boolean
    lastPage:Int
    perPage:Int
    total:Int
  }

  ${authGQLType}
  ${authGQLInput}

  ${appGQLType}
  ${appGQLInput}
  ${templateGQLType}

  ${mediasGQLType}
  ${postTagGQLType}
  ${postAttributeGQLType}
  ${postGQLType}
  ${productGQLType}
  ${splitGQLType}
  ${splitGQLInput}
  ${supplierGQLType}
  ${supplierGQLInput}
  ${roleGQLType}
  ${roleGQLInput}
  ${userGQLType}
  ${userGQLInput}
  ${enquiryGQLType}
  ${enquiryGQLInput}
  type Query {
    "登录"
    login(login_name:String!, password:String!):LoginData
    userByToken(token: String!): RxUser
    ${authGQLQuery}
    ${appGQLQuery}
    ${templateGQLQuery}
    ${postGQLQuery}
    ${postChannelGQLQuery}
    ${postTagGQLQuery}
    ${postAttributeGQLQuery}
    ${productGQLQuery}
    ${mediasGQLQuery}
    ${supplierGQLQuery}
    ${roleGQLQuery}
    ${userGQLQuery}
    ${enquiryGQLQuery}
  }

  type Mutation{
    ${authGQLMutation}
    ${appGQLMutation}
    ${postGQLMutation}
    ${postChannelGQLMutation}
    ${postTagGQLMutation}
    ${postAttributeGQLMutation}
    ${productGQLMutation}
    ${mediasGQLMutation}
    ${splitGQLMutation}
    ${roleGQLMutation}
    ${userGQLMutation}
    ${enquiryGQLMutation}
  }
`;

// A map of functions which return data for the schema.
export const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    userByToken: userByTokenResolver,
    login:loginResolver,

    ...appQueryResolvers,
    ...pageQueryResolvers,
    ...templateQueryResolvers,
    ...authQueryResolvers,
    
    ...postQueryResolvers,
    ...postChannelQueryResolvers,
    ...postTagQueryResolvers,
    ...postAttributesQueryResolvers,
    ...productQueryResolvers,
    
    ...mediaQueryResolvers,
    ...supplierQueryResolvers,
    ...userQueryResolvers,
    ...roleQueryResolvers,
    ...enquiryQueryResolvers,
  },

  Mutation:{
    ...appMutationResolvers,
    ...pageMutationResolvers,
    ...authMutationResolvers,

    ...postMutationResolvers,
    ...postChannelMutationResolvers,
    ...postTagMutationResolvers,
    ...postAttributeMutationResolvers,
    ...productMutationResolvers,
    ...mediaMutationResolvers,
    ...splitDemoMutationResolvers, 
    ...userMutationResolvers,
    ...roleMutationResolvers,
    ...enquiryMutationResolvers
  }
};