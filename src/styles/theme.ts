import {extendTheme} from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: {
      input:{
        fontWeight: '600',
        height: '59px !important',
        fontSize: '18px',
        color: '#121212',
        width: '100%',
        backgroundColor: '#FFF',
        border: '1px solid #949494',
        borderRadius: '4px',
        paddingLeft: '10px'
      },
    },
  },
})
