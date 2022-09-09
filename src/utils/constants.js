import facebook from '../images/sign/facebook.svg';
import google from '../images/sign/google.svg';
import apple from '../images/sign/apple.svg';

export const signLogos = [
    {name: "Facebook", icon:facebook},
    {name: "Apple", icon: apple},
    {name: "Google", icon: google},
]

export function firstLetter(name) {
    return Array.from(name)[0].toUpperCase();
}
