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
    const duration = Number.parseInt(props.duration || 500);
    const max = Number.parseInt(props.max || 100);
    const delay = Number.parseInt(props.delay || 50);
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;

    const animatedValue = React.useRef(new Animated.Value(0)).current
    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue, duration, delay, useNativeDriver: true,
        }).start(() => {
            animation(toValue === 0 ? percentage : 0);
        });
    }
    const circleRef = React.useRef();
    React.useEffect(() => {
        animation(percentage);

        animatedValue.addListener(v => {
            if (circleRef?.current) {
                const maxPerc = 100 * v.value / max;
                const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100;
                circleRef.current.setNativeProps({
                    strokeDashoffset
                });
            }
        })
    })

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
                  />
                 <AnimatedCircle
                     ref={circleRef}
                     cx='50%'
                     cy='50%'
                     stroke={props.color}
                     strokeWidth={strokeWidth}
                     r={radius}
                     fill='transparent'
                     strokeDasharray={circleCircumference}
                     strokeDashoffset={animatedValue}
                     strokeLinecap='round'
                 />
              </G>
           </Svg>
        </View>
    )

};

export {
    Donut,
};
