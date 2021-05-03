import * as React from "react"
import { motion } from 'framer-motion';


function Logo(props) {
  return (
      <div>
        <motion.svg
            width={74}
            height={74}
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            animate={{ 
              rotate: 360 }}
            transition={{ duration: 2}}
            drag
            dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
            dragElastic={1}
                >
            <path fill="#C2D1CE" d="M14 8h52v52H14z" 
            />
              <circle cx={2} cy={48} r={2} fill="#373737" />
              <circle cx={2} cy={60} r={2} fill="#373737" />
              <circle cx={2} cy={72} r={2} fill="#373737" />
              <circle cx={14} cy={48} r={2} fill="#373737" />
              <circle cx={14} cy={60} r={2} fill="#373737" />
              <circle cx={14} cy={72} r={2} fill="#373737" />
              <circle cx={26} cy={48} r={2} fill="#373737" />
              <circle cx={26} cy={60} r={2} fill="#373737" />
              <circle cx={26} cy={72} r={2} fill="#373737" />
            <path stroke="#373737" strokeWidth={2} d="M73 42V0M45 42V0M59 42V0" />
            </motion.svg>
      </div>
    
  )
}

export default Logo