import { Block } from '../../modules/Block.js';
import { AuthService } from '../../services/AuthService.js';
import { Router } from '../../modules/Router.js';
export declare class ProfilePage extends Block {
    authService: AuthService;
    router: Router;
    constructor();
    componentDidMount(): void;
    initEvents(): void;
    render(): string;
}
export default ProfilePage;
