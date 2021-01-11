import { IPage } from 'Base/Model/IPage';
import { IAuth } from 'Base/Model/IAuth';
import { ID } from './graphqlTypes';

export interface IModule {
  id: ID;
  slug: string;
  name: string;
  moduleType?: string;
  isDrawerStyle?:boolean;
  pages?: IPage[];
  entryPage?: IPage;
  auths?: IAuth[];
  entry_page_id?:ID; //以后要删除该字段
}