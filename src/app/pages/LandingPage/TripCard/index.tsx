/**
 *
 * TripCard
 *
 */
import * as React from 'react';
import {
  ActionIcon,
  CardActions,
  CardCover,
  Meta,
  MetaAvatar,
  MetaContent,
  MetaDescription,
  MetaTitle,
  StyledCard,
  TripCardDiv,
} from './styled';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {
  id: number;
  name: string;
}

export function TripCard(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    // <>
    //   <TripCardDiv>id: {props.id}</TripCardDiv>
    // </>
    <StyledCard>
      <CardCover>
        <img
          alt="example"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezKAC4Ut8_p2T96Y9HVQpHOiYG_04Eo3RVQ&usqp=CAU"
        />
      </CardCover>
      <Meta>
        <MetaAvatar>
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt="avatar"
          />
        </MetaAvatar>
        <MetaContent>
          <MetaTitle>{props.name}</MetaTitle>
          <MetaDescription>{props.name}</MetaDescription>
        </MetaContent>
      </Meta>
      <CardActions>
        <ActionIcon>⚙️</ActionIcon>
        <ActionIcon>✏️</ActionIcon>
        <ActionIcon>•••</ActionIcon>
      </CardActions>
    </StyledCard>
  );
}
