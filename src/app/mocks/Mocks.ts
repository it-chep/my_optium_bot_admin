
import { AdminMessageMocks } from "./adminMessage/AdminMessageMocks";
import { InformationPostMocks } from "./informationPost/InformationPostMocks";
import { ListMocks } from "./list/ListMocks";
import { NewslettersMocks } from "./newsletters/NewslettersMocks";
import { PostMocks } from "./post/PostMocks";
import { ScenarioMocks } from "./scenario/ScenarioMocks";
import { UserMocks } from "./user/UserMocks";

const mocks: {[key: string]: any} = {
    ...AdminMessageMocks,
    ...InformationPostMocks,
    ...ListMocks,
    ...NewslettersMocks,
    ...PostMocks,
    ...ScenarioMocks,
    ...UserMocks
};

export async function findMock(url: string) {
    const mockKeys = Object.keys(mocks);
  
    for (const mockKey of mockKeys) {
        const regexPattern = mockKey.replace(/:\w+/g, '([^/]+)');
        const regex = new RegExp(`^${regexPattern}$`);
    
        if (regex.test(url)) {
            return { 
                async json(){
                    return mocks[mockKey];
                }
            }
        }
    }
  
    return null;
}