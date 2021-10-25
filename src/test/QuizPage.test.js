import React from 'react';
import { render } from "@testing-library/react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import QuizPage from '../pages/QuizPage';
import * as quizFunc from '../pages/QuizPage';
import Quiz from '../components/Quiz';

describe("<QuizPage />", () => {
    it('성공적으로 렌더링되어야 합니다.', () => {
        const wrapper = shallow(<QuizPage />);
        expect(wrapper.length).toBe(1);
    });
    it('Text 구문 중 오류를 검출하여 변환합니다.', () => {
        expect(quizFunc.setQuestion("hello, this is &error;text test!")).toBe("hello, this is text test!");
    });
    /*
    it('NextButton을 누르면 다음 문제로 넘어갑니다.', async() => {
        const { result, waitForNextUpdate } = renderHook(<QuizPage/>);
        await waitForNextUpdate();
        expect(result.current.currentQuestion).toBe(result.current.currentQuestion+1);
    });
    */
})

describe("<Quiz />", () => {
    it("matches snapshot", () => {
        const utils = render(<Quiz question={["This is test question."]}/>)
        expect(utils.container).toMatchSnapshot();
    });
    
    it("shows the props correctly", () => {
        const utils = render(<Quiz question={["This is test question."]}/>)
        utils.getByText("This is test question.");
    })
    
})