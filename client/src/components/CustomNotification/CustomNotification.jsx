import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function CustomNotification({ message, onClose }) {
    useEffect(() => {
        if (message) {
            // Clear all existing notifications
            $('[data-notify="container"]').remove();

            const messageHtml = typeof message === 'string' ? message : messageToString(message);
            const tempDiv = document.createElement('div');
            const root = createRoot(tempDiv);
            root.render(message);

            $.notify({
                message: messageHtml
            }, {
                type: 'success',
                delay: 5000,
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
                template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-success" role="alert" style="display: inline-block; margin: 0px auto; position: fixed; transition: 0.5s ease-in-out; z-index: 2031; top: 0; left: 0; right: 0;">' +
                          '<span data-notify="message">{2}</span>' +
                          '<div class="progress" data-notify="progressbar">' +
                          '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                          '</div>' +
                          '</div>'
            });

            tempDiv.remove();
        }
    }, [message, onClose]);

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