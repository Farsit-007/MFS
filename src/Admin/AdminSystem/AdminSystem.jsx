import Admin_AG_Tab from "./Admin_AG_Tab";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Admin_US_Tab from "./Admin_US_Tab";
import TabPanel from "./TabPanel";
import '../AdminSystem/Ani.css'
const AdminSystem = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="mt-5">
            <Box sx={{ width: '100%' }}>
                <div className="flex justify-center">
                    <Tabs
                        value={value}
                        textColor="white"
                        onChange={handleChange}
                        aria-label="wrapped label tabs example"
                    >
                        <Tab
                            value="1"
                            label="All Users"
                            wrapped
                        />
                        <Tab value="2" label="All Agents" />
                    </Tabs>
                </div>
                <TabPanel value={value} index="1">
                    <Admin_US_Tab></Admin_US_Tab>
                </TabPanel>
                <TabPanel value={value} index="2">
                <Admin_AG_Tab></Admin_AG_Tab>
                </TabPanel>
            </Box>
        </div>
    );
};

export default AdminSystem;