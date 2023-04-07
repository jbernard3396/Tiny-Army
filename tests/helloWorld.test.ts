import { describe, expect, test } from '@jest/globals';
import { HelloWorld } from '../src/helloWorld';

describe('starter', () => {
    test('should return "Hello world"', () => {
        const helloWorld = new HelloWorld();
        expect(helloWorld.helloWorld()).toBe('Hello World!');
    });
    }
);