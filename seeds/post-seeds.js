const { Post } = require("../models");

const postdata = [
  {
    title: "turpis enim blandit mi in porttitor pede",
    content:
      "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
    user_id: 4,
  },
  {
    title: "viverra diam vitae quam suspendisse potenti",
    content:
      "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper",
    user_id: 8,
  },
  {
    title: "etiam justo etiam pretium iaculis justo in hac habitasse platea",
    content:
      "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
    user_id: 4,
  },
  {
    title: "vestibulum quam sapien varius ut blandit non",
    content:
      "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum",
    user_id: 10,
  },
  {
    title: "arcu sed augue aliquam erat volutpat in",
    content:
      "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
    user_id: 6,
  },
  {
    title: "ultrices mattis odio donec vitae nisi nam ultrices",
    content:
      "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
    user_id: 6,
  },
  {
    title: "ipsum aliquam non mauris morbi non lectus aliquam sit amet",
    content:
      "in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
    user_id: 6,
  },
  {
    title: "varius nulla facilisi cras non velit",
    content:
      "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
    user_id: 2,
  },
  {
    title: "morbi non quam nec dui luctus rutrum nulla",
    content:
      "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut",
    user_id: 8,
  },
  {
    title: "in quis justo maecenas rhoncus aliquam lacus",
    content:
      "in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci",
    user_id: 10,
  },
  {
    title: "cum sociis natoque penatibus et magnis",
    content:
      "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
    user_id: 7,
  },
  {
    title: "blandit non interdum in ante vestibulum ante ipsum",
    content:
      "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius",
    user_id: 6,
  },
  {
    title: "pede morbi porttitor lorem id ligula suspendisse",
    content:
      "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
    user_id: 2,
  },
  {
    title: "maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
    content:
      "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
    user_id: 2,
  },
  {
    title: "quis odio consequat varius integer ac leo pellentesque ultrices",
    content:
      "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
    user_id: 7,
  },
  {
    title: "leo odio condimentum id luctus nec molestie sed",
    content:
      "pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit",
    user_id: 8,
  },
  {
    title: "felis sed interdum venenatis turpis enim blandit mi",
    content:
      "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam",
    user_id: 7,
  },
  {
    title: "blandit nam nulla integer pede justo lacinia eget tincidunt",
    content:
      "nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus",
    user_id: 10,
  },
  {
    title: "phasellus in felis donec semper sapien a",
    content:
      "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
    user_id: 2,
  },
  {
    title: "eu magna vulputate luctus cum sociis natoque penatibus",
    content:
      "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
    user_id: 3,
  },
  {
    title: "molestie sed justo pellentesque viverra pede",
    content:
      "quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla",
    user_id: 1,
  },
  {
    title: "dui nec nisi volutpat eleifend donec ut dolor morbi",
    content:
      "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
    user_id: 7,
  },
  {
    title: "ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
    content:
      "morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
    user_id: 1,
  },
  {
    title: "quis turpis eget elit sodales scelerisque mauris sit amet",
    content:
      "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede",
    user_id: 5,
  },
  {
    title: "quis orci eget orci vehicula condimentum curabitur",
    content:
      "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
