import { test, expect } from '@playwright/test';
import { login } from './L3';

test('test name', async ({ page }) => {
    await login( page, expect )
});
