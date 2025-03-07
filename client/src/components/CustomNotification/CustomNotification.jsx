import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function CustomNotification({ message, type = 'success', onClose, timeout = 3000 }) {
    useEffect(() => {
        if (message) {
            const messageHtml = typeof message === 'string' ? message : messageToString(message);
            const tempDiv = document.createElement('div');
            ReactDOM.render(message, tempDiv);

            $.notify({
                message: messageHtml
            }, {
                type: type,
                delay: timeout,
                placement: {
                    from: "top",
                    align: "center"
                },
                offset: {
                    y: 0 
                },
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onClose: onClose,
                template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert" style="display: inline-block; margin: 0px auto; position: fixed; transition: 0.5s ease-in-out; z-index: 2031; top: 0; left: 0; right: 0;">' +
                          '<span data-notify="message">{2}</span>' +
                          '<div class="progress" data-notify="progressbar">' +
                          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                          '</div>' +
                          '</div>'
            });

            tempDiv.remove();
        }
    }, [message, type, timeout, onClose]);

    return null;
}

function messageToString(element) {
    if (typeof element === 'string') {
        return element;
    }
    if (React.isValidElement(element)) {
        const children = Array.isArray(element.props.children) 
            ? element.props.children 
            : [element.props.children];
        return children
            .map(child => (typeof child === 'string' ? child : messageToString(child)))
            .join('');
    }
    return '';
} 