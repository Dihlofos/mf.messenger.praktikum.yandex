import { Block } from '../../modules/Block.js';
import { Router } from '../../modules/Router.js';
import { UserService } from '../../services/UserService.js';
export declare class ProfileEditPage extends Block {
    userService: UserService;
    router: Router;
    constructor();
    componentDidMount(): void;
    render(): string;
}
export default ProfileEditPage;
