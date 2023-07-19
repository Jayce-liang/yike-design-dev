import Radio from './src/radio.vue';
import RadioGroup from './src/radio-group.vue';
import { withInstall } from '@yike/utils';
export const YkRadio = withInstall(Radio);
export const YkRadioGroup = withInstall(RadioGroup);

// export default YkRadio;
export * from './src/radio';
