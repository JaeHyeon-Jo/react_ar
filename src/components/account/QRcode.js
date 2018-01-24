import React, { Component } from 'react';
import PropTypes from 'prop-types'

const propTypes = {

};

const defaultProps = {

};


class QRcode extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <button type="button">QR 코드 생성하기</button>
              <p>한 번 생성된 QR 코드는 영구적으로 사용됩니다. 해킹 및 오류 등 특수한 경우에만 재발급 신청이 가능합니다.</p>
            </div>
        );
    }
}

QRcode.propTypes = propTypes;
QRcode.defaultProps = defaultProps;

export default QRcode;
