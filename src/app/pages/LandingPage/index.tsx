/**
 *
 * LandingPage
 *
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../components/Header';
import { Container, ContentBox, Footer, Main, SearchCenterer } from './styled';

import { selectUsers, selectLoading, selectError } from './slice/selectors';
import { useLandingPageSlice } from './slice';
import { TripCard } from './TripCard';
import { SearchBar } from './SearchBar';
import styled from 'styled-components';

interface Props {}

export function LandingPage(props: Props) {
  const { actions } = useLandingPageSlice();

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state users is empty, load users
    if (users.length === 0) {
      dispatch(actions.loadUsers());
    }
  });

  return (
    <Container>
      <Main>
        <Header />
        <SearchCenterer>
          <SearchBar />
        </SearchCenterer>
      </Main>
      <ContentBox>
        {users.map(user => (
          <TripCard id={user.id} name={user.name} />
        ))}
      </ContentBox>
      <Footer>Footer</Footer>
    </Container>
  );
}
