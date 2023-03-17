import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export function ActiveIndicator({ ...props }: BoxProps) {
  return <Box bgColor="brand.primary.pure" height="40px" width="8px" borderRightRadius="lg" {...props} />;
}
