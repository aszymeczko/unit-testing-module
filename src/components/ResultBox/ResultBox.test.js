import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    const testCases = [
        {input: 100, output: "PLN 100.00 = $28.57", from: "PLN", to: "USD"},
        {input: 200, output: "PLN 200.00 = $57.14", from: "PLN", to: "USD"},
        {input: 300, output: "PLN 300.00 = $85.71", from: "PLN", to: "USD"},
        {input: 400, output: "PLN 400.00 = $114.29", from: "PLN", to: "USD"},
        {input: 400, output: "$400.00 = PLN 1,400.00", from: "USD", to: "PLN"},
        {input: 500, output: "PLN 500.00 = PLN 500.00", from: "PLN", to: "PLN"},
        {input: 500, output: "$500.00 = $500.00", from: "USD", to: "USD"},
        {input: -500, output: "Wrong value…", from: "USD", to: "USD"},
    ]

    for(const testObj of testCases) {
        it('should render proper info about conversion when PLN -> USD', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.input} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(`${testObj.output}`);
            cleanup()
        });
    };

});