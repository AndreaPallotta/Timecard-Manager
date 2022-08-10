import actionService from '@/services/action.service';

const initialState = {
  totalHours: 0,
  lastAction: undefined,
};

export const action = {
    namespaced: true,
    state: initialState,
    actions: {
        async getLastAction(_, email) {
            return await actionService.getLastAction(email);
        },
        async getTotalHours(_, email) {
            return await actionService.getTotalHours(email);
        }
    }
}