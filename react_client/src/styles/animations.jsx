const durations = {
  onEnter: 'enteringScreen',
  onExit: 'leavingScreen',
};

const eases = {
  sharp: 'sharp',
};

const targets = {
  width: 'width',
  height: 'height',
  margin: 'margin',
};

const baseTransition = (
  theme,
  target,
  durationParam,
  easeParam = eases.sharp
) => {
  if (!theme || !target) return;

  return theme.transitions.create(target, {
    easing: theme.transitions.easing[easeParam],
    duration: theme.transitions.duration[durationParam],
  });
};

const openTransition = (theme, target = targets.width) =>
  baseTransition(theme, target, durations.onEnter);

const closeTransition = (theme, target = targets.width) =>
  baseTransition(theme, target, durations.onExit);

export { openTransition, closeTransition };
