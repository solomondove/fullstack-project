import * as RouteApiUtil from '../util/route_api_util'; 

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE'; 
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES'; 
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS'; 
export const CLEAR_ROUTE_ERRORS = 'CLEAR_ROUTE_ERRORS'; 
export const DELETE_ROUTE = 'DELETE_ROUTE'; 


export const receiveRoute = payload => ({
    type: RECEIVE_ROUTE, 
    payload
})

export const receiveRoutes = routes => ({
    type: RECEIVE_ROUTES, 
    routes
})

export const deleteRoute = routeId => ({
    type: DELETE_ROUTE, 
    routeId
})

export const receiveRouteErrors = errors => ({
    type: RECEIVE_ROUTE_ERRORS, 
    errors
})

export const clearRouteErrors = () => ({
    type: CLEAR_ROUTE_ERRORS
})

export const createRoute = route => dispatch => {
    return RouteApiUtil.createRoute(route)
        .then(route => dispatch(receiveRoute(route)), errors => dispatch(receiveRouteErrors(errors)))
}

export const fetchRoute = routeId => dispatch => {
    return RouteApiUtil.fetchRoute(routeId)
        .then(route => dispatch(receiveRoute(route)), errors => dispatch(receiveRouteErrors(errors)))
}

export const updateRoute = route => dispatch => {
    return RouteApiUtil.updateRoute(route)
        .then(route => dispatch(receiveRoute(route)), errors => dispatch(receiveRouteErrors(errors)))
}

export const fetchRoutes = userId => dispatch => {
    return RouteApiUtil.fetchRoutes(userId)
        .then(routes => dispatch(receiveRoutes(routes)), errors => dispatch(receiveRouteErrors(errors)))
}

export const removeRoute = routeId => dispatch => {
    return RouteApiUtil.deleteRoute(routeId)
        .then(() => dispatch(deleteRoute(routeId)), errors => dispatch(receiveRouteErrors(errors)))
}

