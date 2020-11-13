import { HTTPTransport } from '../modules/Api.js';
export class AuthService {
    constructor(props) {
        this.transport = new HTTPTransport();
        this.props = props;
    }
    signin() {
        return this.transport.post('/auth/signin', { data: this.props });
    }
    signup() {
        return this.transport.post('/auth/signup', { data: this.props });
    }
    logout() {
        return this.transport.post('/auth/logout', { data: this.props });
    }
    getUser() {
        return this.transport
            .get('/auth/user', { data: this.props })
            .then((data) => {
            let dataObj = JSON.parse(data.response);
            dataObj.fields = [];
            if (dataObj.login) {
                dataObj.fields.push({
                    value: dataObj.login,
                    label: 'Логин',
                });
            }
            if (dataObj.first_name) {
                dataObj.fields.push({
                    value: dataObj.first_name,
                    label: 'Имя',
                });
            }
            if (dataObj.phone) {
                dataObj.fields.push({
                    value: dataObj.phone,
                    label: 'Телефон',
                });
            }
            if (dataObj.second_name) {
                dataObj.fields.push({
                    value: dataObj.second_name,
                    label: 'Фамилия',
                });
            }
            if (dataObj.display_name === null) {
                dataObj.display_name = dataObj.first_name;
            }
            if (dataObj.avatar === null) {
                dataObj.avatar = 'assets/images/avatar.png';
            }
            else {
                dataObj.avatar = `${this.transport.BASEURL}${dataObj.avatar}`;
            }
            return dataObj;
        });
    }
}
//# sourceMappingURL=AuthService.js.map