import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  background: url('https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_800/v1/ako%20homepage%20anon/hero-background--desktop')
    center center no-repeat;
  background-position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;

  @media (max-width: 1135px) {
    background: url('https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_400/v1/ako%20homepage%20anon/hero-background--tablet')
      center center no-repeat;
    background-size: cover;
  }

  @media (max-width: 768px) {
    background: url('https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_360/v1/ako%20homepage%20anon/hero-background--mobile')
      center center no-repeat;
    text-align: left;
    padding: 16px;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: #408612;
  font-weight: 500;
  &:hover {
    background-color: #2f650b;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: #8fdee3;
  font-weight: bold;
  &:hover {
    background-color: #d1fcff;
    cursor: pointer;
  }
`;

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <Head>
        <title>ATK | Dashboard</title>
      </Head>

      <Container>
        <div className="flex justify-center py-16">
          <div className="flex-col w-96 md:w-auto mt-96 md:mt-0">
            <h1 className="text-4xl md:text-6xl">
              <span className="inline md:block">Cook Anything with</span>{' '}
              <span>Confidence</span>
            </h1>
            <p className="text-lg md:text-xl pt-4 pb-8">
              <span className="inline md:block">
                Start your 2-week free trial and get instant access to
              </span>
              <span>every recipe, review, and video across our sites</span>
            </p>

            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                required
                className="w-auto md:w-96 border border-gray-300 h-12 pl-2"
                placeholder="Your Email Address"
              />
              <Button
                type="submit"
                className="w-auto md:w-64 h-12 tracking-widest"
              >
                GET FREE ACCESS
              </Button>
            </form>
            <div className="flex justify-end">
              <p
                className="text-xs pt-2 cursor-pointer"
                onClick={() => setIsShow(!isShow)}
              >
                How we use your email address
              </p>
            </div>
            <div className="flex justify-center relative">
              <p className="text-lg pt-12 text-center">
                Already a member? <Link href="#">Log in here</Link>
              </p>
              {isShow ? (
                <p className="bg-white text-xs border border-gray-300 text-gray-400 p-4 w-80 absolute right-0">
                  America's Test Kitchen will not sell, rent, or disclose your
                  email address to third parties unless otherwise notified. Your
                  email address is required to identify you for free access to
                  content on the site. You will also receive free newsletters
                  and notification of America's Test Kitchen specials.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
