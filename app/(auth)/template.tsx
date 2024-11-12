'use client'

import { easeIn, easeInOut, motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        // TODO add transition on lainding page.
        <motion.div
            // key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.9 }}
        >
            {children}
        </motion.div>
    )
}