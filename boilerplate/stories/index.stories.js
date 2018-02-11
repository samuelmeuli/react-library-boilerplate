import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from '../lib/MyComponent';


storiesOf('MyComponent', module)
	.add('Component with title', () => (
		<MyComponent title="Hello World!" />
	));