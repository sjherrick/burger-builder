import React, { useEffect, useState } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {

    return function ErrorHandler(props) {
        const [err, setError] = useState(null);

        // useEffect(() => {
        //     axios.interceptors.request.use(req => {
        //         setError(null);
        //         return req;
        //     });
        //     axios.interceptors.response.use(res => res, error => {
        //         setError(error);
        //     });
        // }, []);
        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        });
        const resInterceptor = axios.interceptors.response.use(res => res, error => {
            setError(error);
        });

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.request.eject(resInterceptor);
            }
        }, [])

        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <Aux>
                <Modal 
                    show={err}
                    modalClosed={errorConfirmedHandler}>
                    {err ? err.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

export default withErrorHandler;