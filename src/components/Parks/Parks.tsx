import { useMemo } from 'react';
import Card from '../base/Card/Card'
import LinkButton from '../base/Button/LinkButton';
import { parks } from '../../data/dataset1.json'
import './Parks.scss'

interface Props {
  featuredCard?: string;
}

export default function Parks({ featuredCard }: Props) {
  const parksWithImage = useMemo(() => parks.filter((item) => !!item.image), [])

  const cards = parksWithImage.map((item, index) => {
    const {
      title,
      category,
      body,
      image,
      linkText,
      link
    } = item
    const categoryTheme = category.toLocaleLowerCase()
    const isFeaturedCard = index.toString() === featuredCard;
    const featuredCardClass = isFeaturedCard ? 'featured_card' : null;
    const containerClass = `col-md-3 d-flex align-items-stretch ${featuredCardClass}`

    return (
      <div data-testid="park-card-container" key={`park-${index}`} className={containerClass}>
        <Card>
          <div className={`card__banner card__banner__${categoryTheme}`}>{category}</div>
          <img src={image} alt={title} className="card__image" />
          <div className="card__body d-flex flex-column align-items-start">
            <h2 className={`card__title card__title__${categoryTheme}`}>{title || 'National Park'}</h2>
            <p className="card__description">{body}</p>
            {link &&
              <LinkButton
                href={link}
                text={linkText}
                className={`mt-auto card__link__${categoryTheme}`}
              />
            }
          </div>
        </Card>
      </div>
    )
  })

  return (
    <div className="row">
      {cards}
    </div>
  )
}
