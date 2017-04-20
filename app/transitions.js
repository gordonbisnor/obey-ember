export default function () {

  let duration = {duration: 75}

  this.transition(
    this.toValue(function(value){ value !== undefined }),
    this.use('fade', duration),
    this.reverse('fade', duration)
  );

  this.transition(
    this.fromRoute('day'),
    this.toRoute('artist'),
    this.use('fade', duration),
    this.reverse('fade', duration)
  );

}
