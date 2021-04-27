import React from 'react';

class Progress extends React.Component {

    progress = '7.5';

    constructor() {} // hàm khởi tạo
    componentWillMount = () => {} // trước khi re-render component
    componentWillReceiveProps = () => {} //chạy khi component con nhập props từ cha
    shouldComponentUpdate = () => {} // Nếu như return false thì các phương thực componentWillUpdate, render, componentDidUpdate sẽ không được chạy nữa
    componentWillUpdate = () => {} // trước khi re-render component
    componentDidUpdate = () => {} // sau khi re-render componet
    componentDidCatch = () => {} // bắt lỗi
    componentDidMount = () => {} //sử dụng AJAX để fetch những dữ liệu khởi tạo từ một API thì componentDidMount là nơi để thực hiện lời gọi AJAX đó
    componentWillUnmount = () => {} //gọi trước khi một component bị remove khỏi một DOM giống destroy angular
    render() {
        return;
    }

}

export default Progress;