import React from "react";
import JuniorPlus from "./JuniorPlus";
import {Meta, Story} from "@storybook/react/types-6-0";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";


export default {
    title: 'JuniorPlus',
    component: JuniorPlus,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = () => <JuniorPlus />;

export const AppWithReduxExample = Template.bind({});