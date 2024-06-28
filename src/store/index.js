import { create } from 'zustand'

export const useStore = create((set) => ({
  // estado del menu desplegable al momento de abrirse o cerrarse
  expanded: false,

  // función que maneja el estado expanded
  handleExpanded: () => set(state => ({
    expanded: !state.expanded
  }))
}));
