import React from 'react';
import type {Node} from 'react';
import {Text, View, Animated} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Donut = (props): Node => {
    console.log(props);
    const radius = Number.parseInt(props.radius);
    const strokeWidth = Number.parseInt(props.strokeWidth);
    const percentage = Number.parseInt(props.percentage);
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    const strokeDashoffset = circleCircumference - (circleCircumference * percentage) / 100;
    console.log(halfCircle)
    console.log(circleCircumference)
    console.log(strokeDashoffset)

    return (
        <View>
           <Svg
               width={radius * 2}
               height={radius * 2}
               viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
           >
              <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                  <Circle
                      cx='50%'
                      cy='50%'
                      stroke={props.color}
                      strokeWidth={strokeWidth}
                      r={radius}
                      fill='transparent'
                      opacity={0.2}
                  ></Circle>
                 <Circle
                     cx='50%'
                     cy='50%'
                     stroke={props.color}
                     strokeWidth={strokeWidth}
                     r={radius}
                     fill='transparent'
                     strokeDasharray={circleCircumference}
                     strokeDashoffset={strokeDashoffset}
                     strokeLinecap='round'
                 ></Circle>
              </G>
           </Svg>
        </View>
    )

};

export {
    Donut,
};
