import type { ComponentStyleConfig, DeepPartial } from '@chakra-ui/react';

export const ModalStyle: DeepPartial<ComponentStyleConfig> = {
  parts: ['dialog'],
  baseStyle: {
    dialog: {
      bgColor: 'neutral.white',
      borderRadius: 'md',
      padding: 'xl',
      boxShadow: 'level3',
    },
  },
};
