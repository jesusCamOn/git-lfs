import { create } from 'zustand'
import { PATHS } from '../router/paths'

export const useRouteStore = create((set) => ({
    route: PATHS.home,
    previusRoute: PATHS.home,
    setRoute: (newRoute) => set((state) => ({ previusRoute: state.route, route: newRoute })),
    setBackRoute: () => (()=>({route: previusRoute}))
}))